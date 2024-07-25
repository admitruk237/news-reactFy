import styles from './styles.module.css';
import { getNews } from '../../api/apiNews';
import { useDebounse } from '../../helpers/hooks/useDebounce';
import { PAGE_SIZE } from '../../constants/constants';
import { useFetch } from '../../helpers/hooks/useFetch';
import { useFilters } from '../../helpers/hooks/useFilters';
import LatestNews from '../../components/LatestNews/LatestNews';
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters';

function Main() {
  const { filters, changeFilters } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
  });

  const debouncedKeywords = useDebounse(filters.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  return (
    <main className={styles.main}>
      <LatestNews isLoading={isLoading} banners={data && data.news} />

      <NewsByFilters
        isLoading={isLoading}
        filters={filters}
        changeFilters={changeFilters}
        news={data?.news}
      />
    </main>
  );
}

export default Main;
