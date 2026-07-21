import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CircleCheck } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppCta from "@/components/WhatsAppCta";
import NetworkGraphic from "@/components/NetworkGraphic";
import { getServicePageContent, servicePages } from "@/lib/service-content";
import { getServiceBySlug } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return servicePages.map((p) => ({ slug: p.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = getServicePageContent(slug);
  if (!content) return {};

  const url = `${siteConfig.url}/servicios/${slug}`;

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url,
      type: "website",
      locale: "es_CL",
    },
    twitter: {
      card: "summary_large_image",
      title: content.metaTitle,
      description: content.metaDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const content = getServicePageContent(slug);
  if (!content) notFound();

  const service = getServiceBySlug(slug);
  const Icon = service?.icon;

  const related = content.relatedSlugs
    .map((s) => ({ page: getServicePageContent(s), meta: getServiceBySlug(s) }))
    .filter((r) => r.page && r.meta);

  return (
    <main className="min-h-screen bg-brand-900 pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Servicios", href: "/servicios" },
            { label: content.h1 },
          ]}
        />

        <div className="relative overflow-hidden bg-brand-800 border border-brand-700 h-40 md:h-56 mb-8">
          <NetworkGraphic className="absolute inset-0 w-full h-full" />
        </div>

        <div className="flex items-center gap-3 mb-4">
          {Icon && (
            <div className="w-12 h-12 bg-accent/10 flex items-center justify-center">
              <Icon className="text-accent" size={24} />
            </div>
          )}
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            {content.eyebrow}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mb-8">
          {content.h1}
        </h1>

        <div className="space-y-4 text-gray-300 text-lg leading-relaxed mb-12">
          {content.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
            Cómo lo hacemos
          </h2>
          <p className="text-gray-400 mb-6">{content.comoLoHacemosIntro}</p>
          <ul className="space-y-3">
            {content.comoLoHacemos.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CircleCheck className="text-accent mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
            Qué obtiene su organización
          </h2>
          <p className="text-gray-400 mb-6">{content.queObtieneIntro}</p>
          <ul className="space-y-3">
            {content.queObtiene.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CircleCheck className="text-accent mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <p className="text-gray-300 leading-relaxed mb-8">{content.closing}</p>

        {content.extraNote && (
          <p className="text-gray-500 text-sm italic mb-12 border-l-2 border-brand-700 pl-4">
            {content.extraNote}
          </p>
        )}

        <div className="mb-16">
          <WhatsAppCta message={content.ctaMessage} />
        </div>

        {related.length > 0 && (
          <section className="pt-8 border-t border-brand-700">
            <h2 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-white mb-4">
              Servicios relacionados
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {related.map(({ page, meta }) => {
                const RelatedIcon = meta!.icon;
                return (
                  <Link
                    key={page!.slug}
                    href={`/servicios/${page!.slug}`}
                    className="group p-4 bg-brand-800 border border-brand-700 hover:border-accent/50 transition-colors flex items-start gap-3"
                  >
                    <RelatedIcon className="text-accent flex-shrink-0" size={20} />
                    <div>
                      <p className="text-white text-sm font-semibold">
                        {meta!.title}
                      </p>
                      <span className="inline-flex items-center gap-1 text-accent text-xs mt-1 group-hover:gap-2 transition-all">
                        Ver servicio <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
