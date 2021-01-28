import { useEffect, useState } from 'react';

import { getCategories } from '../services/category';

function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(json => setCategories(json));
  }, []);

  return categories;
}

export default useCategories;
