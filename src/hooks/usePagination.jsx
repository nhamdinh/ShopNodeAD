import {useState, useEffect} from 'react';

const usePagination = ({data, limit = 10, totalPages, totalCount}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const totalCountData = totalCount ?? data.length;
    const maxPage = totalPages ?? Math.ceil(data.length / limit);
    
    const currentItems = () => {
        const begin = (currentPage) * limit;
        const end = begin + limit;
        // return data.slice(begin, end);
        return data;
    };

    useEffect(() => {
        if (currentPage > maxPage - 1) {
            setCurrentPage(maxPage - 1);
        } else if (currentPage < 0 && maxPage > 0) {
            setCurrentPage(0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentItems()]);

    const next = () => {
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    };

    const prev = () => {
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 0));
    };

    const goToPage = (page) => {
        const pageNumber = Math.max(0, page);
        setCurrentPage(() => Math.min(pageNumber, maxPage));
    }

    const showingOf = () => {
        const begin = (currentPage) * limit;
        const end = totalCountData > limit ? begin + limit : totalCountData;
        return totalCountData > 0 ?
            <>
                <span className="font-semibold">{end}</span>/{totalCountData}
            </>
            : '';
    }

    return {next, prev, goToPage, showingOf, currentItems, currentPage, setCurrentPage, maxPage};
}

export default usePagination