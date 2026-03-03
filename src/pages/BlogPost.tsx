import { useParams } from "react-router-dom";
import { marked } from "marked";
import { getPostBySlug } from "../blog/multiTenantLoader";
import { getSiteKey } from "../getSiteContent";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const siteKey = getSiteKey();

  const post = getPostBySlug(slug);

  marked.setOptions({ breaks: true });

  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center">
      <div className="header-filler" />
      <div className="inner-container p-4">
        <div className="card-shadow items-center rounded-[15px] bg-[color-mix(in_srgb,var(--primary)_60%,transparent)] p-10">
          {post.thumbnail && (
            <img
              src={`/app-specific/${siteKey}/thumbnails/${post.thumbnail}`}
              alt={post.title}
              className="mb-1 w-full rounded-xl object-cover"
            />
          )}

          <article
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: marked(post.content) }}
          />
        </div>
      </div>
    </div>
  );
}
