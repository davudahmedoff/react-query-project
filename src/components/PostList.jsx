import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/helper";

const PostList = () => {
  const {
    data: postsData,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return (
    <div className="container">
      {isLoading && <div>Loading ...</div>}
      {isError && <div>{error?.message}</div>}
      {postsData?.map((post) => {
        return (
          <div key={post.id} className="post">
            <div>{post.title}</div>
            {post.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
