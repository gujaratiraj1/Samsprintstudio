import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = (title) => {
    const location = useLocation();

    useEffect(() => {
        document.title = title
            ? `${title} - Sam's Print Studio`
            : "Sam's Print Studio - Professional Printing in Bangalore";
    }, [location, title]);
};

export default usePageTitle;
