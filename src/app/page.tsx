import { fetchApi } from "@/helpers/fetch-api";
import PageHeader from "@/components/PageHeader";
import PageCardImage from "@/components/PageCardImage";
import { Post } from "@/interfaces/post";
import PagePagination from "@/components/PagePagination";
import { notFound } from "next/navigation";

interface Props {
  searchParams: {
    page?: string;
  }
}

const getData = async (page = 1, pageSize = 2) => {
  const path = "/posts";
  const urlParamsObject = {
      populate: "*",
      sort: {
          id: "asc",
      },
      pagination: {
          page,
          pageSize,
      }
  }
  const {data, meta} = await fetchApi(path, urlParamsObject)
  return {
    data,
    pagination: meta?.pagination,
  };  
}

const Blog = async ({searchParams}:Props) => {
  const {page} = searchParams;
  let pageNumber = page ? parseInt(page): 1;

  if(isNaN(pageNumber) || pageNumber < 1) {
    pageNumber = 1;
  }

  const {data, pagination} = await getData(pageNumber);

  if(pageNumber > pagination.pageCount) {
    return notFound();
  }

  return (
    <div className="space-y-8">
      <PageHeader title="Latest Posts"/>
      <PagePagination pagination={pagination}/>
      <div className="grid gap-4">
        {
          data?.map((post: Post) => (
            <PageCardImage 
                key={post.id}
                post={post}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Blog