import { MDXRemote } from 'next-mdx-remote/rsc'
import PageHeader from "@/components/PageHeader";
import { fetchApi } from "@/helpers/fetch-api";
import { formatDate } from "@/helpers/format-date-helper";
import { Post } from "@/interfaces/post";
import { getImageData } from "@/utils/getImageDate";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

const getData = async(slug= "") => {
  const path = "/posts";
  const urlParamsObject = {
      populate: "image",
      filters: {
        slug,
      }
  }
  const {data} = await fetchApi(path, urlParamsObject)
  return data[0];
}

const Post = async ({params:{slug}}: Props) => { 
  const postData: Post = await getData(slug);

  if (!postData) {
      return notFound();
  }

  const {title, description, body, createdAt, image} = postData.attributes;
  const {url, width, height} = getImageData(image);
  
  return (
    <div className="space-y-8">
        <PageHeader title={title} />
        <p className="text-gray-500">
            {
              formatDate(createdAt)
            }
        </p>
        <Image 
            className="h-auto rounded-lg mx-auto"
            src={url}
            alt={`ìmage de ${title}`}    
            width={width}
            height={height}
            // priority
        />
        <div className='h-16'>
          <p className="text-gray-500 first-line:uppercase first-line:tracking-widest first-letter:text-6xl first-letter:font-bold first-letter:text-gray-900 first-letter:mr-3 first-letter:float-left">
              {description}
          </p>
        </div>
        <div className='prose-lg'>
            <MDXRemote source={body}/>
        </div>
    </div>
  )
}

export default Post