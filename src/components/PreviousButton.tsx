import Link from "next/link"

interface Props {
  page: number;
}

const PreviousButton = ({page}:Props) => {
    const classPrevious = "flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
  return (
    <Link href={page === 1 ? `/blog?page=${page}`: `/blog?page=${page - 1}`} className={`${classPrevious} ${page === 1 ? "opacity-50 pointer-events-none": ""}`}>
        <span className="sr-only">Previous</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
        </svg>
    </Link>
  )
}

export default PreviousButton