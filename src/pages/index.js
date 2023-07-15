import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
<div >
	<div >
		<div >
			<h1 id="profile-eileen-town" class="sc-dlfnbm Header__GridHeading-sc-i98650-1 cTsoyo eiGOpF">Eileen Town</h1>
		</div>
		<div >
			<h2>Eileen Town is a Singapore online gift shop, offering unique gifts such as money flowers, fortune cat, music boxes, wedding gifts, couple gifts and much more for various occasions. Searching for a unique and memorable gift for your special occasion can be very challenging. You want a unique gift to for someone special, to celebrate a special occasion, to get a personalized gift, to express your feelings and to show that you care.</h2>
		</div>
	</div>
</div>



    
    </Layout>
  );
};

export default IndexPage;
