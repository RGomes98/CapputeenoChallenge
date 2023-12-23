import { convertToCurrency } from '@/app/utils/convertToCurrency';
import { Product } from '@/app/data/mock';

import styles from './ProductCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const ProductCard = ({ id, name, image_url, price_in_cents }: Product) => {
  const formattedPrice = convertToCurrency(price_in_cents);

  return (
    <Link className={styles.productCard} href={`produto/${id}`}>
      <Image className={styles.image} src={image_url} alt={name} width={1000} height={1000} />
      <div className={styles.wrapper}>
        <span className={styles.name}>{name}</span>
        <span className={styles.bar} />
        <span className={styles.price}>{formattedPrice}</span>
      </div>
    </Link>
  );
};
