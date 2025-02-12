import { getPageBySlug } from "@/data/loaders";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/BlockRenderer";
import { ContentList } from "@/components/ContentLIst";
import { BlogCard } from "@/components/BlogCard";

async function loader(slug: string) {
  const { data } = await getPageBySlug('blog');
  if (data.length === 0) notFound();
  return { blocks: data[0]?.blocks };
}

interface PageProps {
  params: Promise<{ slug: string }>
}





export default async function BlogPageRoute({ params }: PageProps) {
  const slug = (await params).slug;
  const { blocks } = await loader(slug);
  return (
    <div className="blog-page">
        <BlockRenderer blocks={blocks} />;
        <ContentList
            headline="Check out our latest articles"
            path="/api/articles"
            component={BlogCard}
        />
    </div>
  )
  
}