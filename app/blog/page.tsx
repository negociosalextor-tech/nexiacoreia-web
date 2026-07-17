import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

const title = "Blog";
const description =
  "Artículos sobre inteligencia artificial aplicada a empresas y gobiernos en Chile y Latinoamérica: automatización, costos, implementación y buenas prácticas.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/blog`,
    type: "website",
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt)
  );

  return (
    <main className="min-h-screen bg-brand-900 pt-32 pb-24">
      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Blog" }]} />

        <div className="max-w-3xl mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Blog
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white">
            Ideas prácticas sobre IA aplicada
          </h1>
          <p className="mt-4 text-gray-400 text-lg">
            Contenido honesto sobre automatización, costos e implementación de
            inteligencia artificial para empresas y gobiernos en Chile.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group p-6 bg-brand-800 border border-brand-700 hover:border-accent/50 transition-colors duration-300 flex flex-col"
            >
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {formatDate(post.publishedAt)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readingMinutes} min de lectura
                </span>
              </div>
              <h2 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-white mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                Leer artículo <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
