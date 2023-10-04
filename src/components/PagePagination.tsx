import Link from "next/link";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";

interface Props {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    }
}

const PagePagination = ({pagination}: Props) => {
    const {page, pageCount} = pagination;
    const classNumber = "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    const classNumberActive = "z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"

  return (
    <nav aria-label="Page navigation example" className="flex justify-center">
        <ul className="flex items-center -space-x-px h-10 text-base">
            <li>
                <PreviousButton page={page}/>
            </li>
            {
                Array.from({length: pageCount}).map((_, index) => (
                    <li key={`array-blog-${index}`}>
                        <Link href={`/blog?page=${index+1}`} className={`${page === (index+1) ? classNumberActive : classNumber}`}>
                            {index + 1}
                        </Link>
                    </li>
                ))
            }
            <li>
                <NextButton page={page} pageCount={pageCount}/>
            </li>
        </ul>
    </nav>
  )
}

export default PagePagination