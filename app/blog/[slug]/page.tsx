import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, Clock } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppCta from "@/components/WhatsAppCta";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const url = `${siteConfig.url}/blog/${slug}`;

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url,
      type: "article",
      locale: "es_CL",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.legalName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <main className="min-h-screen bg-brand-900 pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="container mx-auto px-4 max-w-3xl">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {formatDate(post.publishedAt)}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {post.readingMinutes} min de lectura
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mb-10">
          {post.title}
        </h1>

        <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
          {post.content.map((block, i) => {
            if (block.type === "p") {
              return <p key={i}>{block.text}</p>;
            }
            if (block.type === "h2") {
              return (
                <h2
                  key={i}
                  className="text-2xl font-bold font-[family-name:var(--font-heading)] text-white pt-6"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={i} className="list-disc pl-6 space-y-2">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            if (block.type === "note") {
              return (
                <p
                  key={i}
                  className="text-sm text-gray-400 italic border-l-2 border-brand-700 pl-4"
                >
                  {block.text}
                </p>
              );
            }
            return null;
          })}
        </div>

        <div className="mt-16">
          <WhatsAppCta
            message={`Hola, vengo del blog de NexiaCore (artículo: ${post.title}) y quiero agendar una conversación inicial.`}
          />
        </div>
      </article>
    </main>
  );
}
