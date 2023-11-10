import { cn } from "@/helpers/classnames";
import Link from "next/link"

interface Props {
  page: number;
  pageCount: number;
}

const NextButton = ({page, pageCount}: Props) => {
  const classNext = "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
  return (
    <Link 
      href={page === pageCount ? `/blog?page=${page}`: `/blog?page=${page + 1}`}
      
      className={cn(classNext, {
        "opacity-50 pointer-events-none": page === pageCount,
      })}
    >
        <span className="sr-only">Next</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
        </svg>
    </Link>
  )
}

export default NextButton