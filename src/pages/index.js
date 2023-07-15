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
<div class="sc-bdfBwQ eZNKTD">
	<div class="sc-bdfBwQ sc-gsTCUz jgGrsq bhdLno">
		<div class="sc-bdfBwQ Header__Grid-sc-i98650-0 llgrqs jvyDlw">
			<h1 id="profile-eileen-town" class="sc-dlfnbm Header__GridHeading-sc-i98650-1 cTsoyo eiGOpF">Eileen Town</h1>
		</div>
		<div class="sc-bdfBwQ hTuoxC">
			<h2 class="sc-hKgILt lloOXm">Eileen Town is a Singapore online gift shop, offering unique gifts such as money flowers, fortune cat, music boxes, wedding gifts, couple gifts and much more for various occasions. Searching for a unique and memorable gift for your special occasion can be very challenging. You want a unique gift to for someone special, to celebrate a special occasion, to get a personalized gift, to express your feelings and to show that you care.</h2>
		</div>
	</div>
</div>
<div id="113096813" class="sc-bdfBwQ pkAuV">
	<div data-testid="StyledContainer" class="sc-bdfBwQ StyledContainer__StyledLinkContainer-sc-1kae6sc-0 hqcxUx hdlZPy">
		<a href="https://www.eileentown.com/category/flowers/money-flowers/" target="_blank" rel="noopener" data-testid="LinkButton" aria-describedby="profile-eileen-town " height="auto" class="sc-pFZIQ StyledButton-sc-686c3k-0 ldGKnQ dLjCyh">
			<p class="sc-hKgILt Button__StyledText-sc-uh5tyw-0 kVCYxL rsIfq">Money Flowers</p>
		</a>
	</div>
</div>
<div id="113096908" class="sc-bdfBwQ pkAuV">
	<div data-testid="StyledContainer" class="sc-bdfBwQ StyledContainer__StyledLinkContainer-sc-1kae6sc-0 hqcxUx hdlZPy">
		<a href="https://www.eileentown.com/category/home-living/fortune-cat/" target="_blank" rel="noopener" data-testid="LinkButton" aria-describedby="profile-eileen-town " height="auto" class="sc-pFZIQ StyledButton-sc-686c3k-0 ldGKnQ dLjCyh">
			<p class="sc-hKgILt Button__StyledText-sc-uh5tyw-0 kVCYxL rsIfq">Fortune Cat</p>
		</a>
	</div>
</div>
<div id="113096991" class="sc-bdfBwQ pkAuV">
	<div data-testid="StyledContainer" class="sc-bdfBwQ StyledContainer__StyledLinkContainer-sc-1kae6sc-0 hqcxUx hdlZPy">
		<a href="https://www.eileentown.com/category/home-living/music-boxes/" target="_blank" rel="noopener" data-testid="LinkButton" aria-describedby="profile-eileen-town " height="auto" class="sc-pFZIQ StyledButton-sc-686c3k-0 ldGKnQ dLjCyh">
			<p class="sc-hKgILt Button__StyledText-sc-uh5tyw-0 kVCYxL rsIfq">Music Boxes</p>
		</a>
	</div>
</div>
<div id="113097070" class="sc-bdfBwQ pkAuV">
	<div data-testid="StyledContainer" class="sc-bdfBwQ StyledContainer__StyledLinkContainer-sc-1kae6sc-0 hqcxUx hdlZPy">
		<a href="https://www.eileentown.com/category/wedding/marry-me/" target="_blank" rel="noopener" data-testid="LinkButton" aria-describedby="profile-eileen-town " height="auto" class="sc-pFZIQ StyledButton-sc-686c3k-0 ldGKnQ dLjCyh">
			<p class="sc-hKgILt Button__StyledText-sc-uh5tyw-0 kVCYxL rsIfq">Marry Me</p>
		</a>
	</div>
</div>
<div id="113097154" class="sc-bdfBwQ pkAuV">
	<div data-testid="StyledContainer" class="sc-bdfBwQ StyledContainer__StyledLinkContainer-sc-1kae6sc-0 hqcxUx hdlZPy">
		<a href="https://www.eileentown.com/category/personalized-gifts/celebration-balloons/" target="_blank" rel="noopener" data-testid="LinkButton" aria-describedby="profile-eileen-town " height="auto" class="sc-pFZIQ StyledButton-sc-686c3k-0 ldGKnQ dLjCyh">
			<p class="sc-hKgILt Button__StyledText-sc-uh5tyw-0 kVCYxL rsIfq">Celebration Balloons</p>
		</a>
	</div>
</div>
<div class="sc-bdfBwQ kMVUFR">
	<div class="sc-bdfBwQ sc-gsTCUz cUWRuD bhdLno">
		<a target="_blank" rel="noopener" data-testid="SocialIcon" href="https://www.facebook.com/eileentownsg" aria-label="Eileen Town facebook" class="sc-eCssSg gsOJfM SocialIconItem__StyledLink-sc-19ivton-0 saVRV">
			<svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" class="sc-gKsewC dzFiqz">
				<path d="M23,12A11,11,0,1,0,10.279,22.865h0a11.08,11.08,0,0,0,3.436,0h0A10.952,10.952,0,0,0,23,12ZM10.859,21.935v-6.9a.5.5,0,0,0-.5-.5H8.193V12.5h2.166a.5.5,0,0,0,.5-.5V9.686c0-2.278,1.264-3.585,3.459-3.585a15.392,15.392,0,0,1,1.858.137V7.89h-.824l-.019,0a2,2,0,0,0-2.181,1.735,1.8,1.8,0,0,0-.011.4V12a.5.5,0,0,0,.5.5H15.97l-.312,2.035H13.641a.5.5,0,0,0-.5.5v6.9A10.124,10.124,0,0,1,10.859,21.935Zm3.282-.166V15.535h1.946a.5.5,0,0,0,.5-.425l.465-3.035a.5.5,0,0,0-.494-.575H14.141V10.016a1.267,1.267,0,0,1,.308-.821,1.218,1.218,0,0,1,.9-.3h1.324a.5.5,0,0,0,.5-.5V5.806a.5.5,0,0,0-.42-.494A16.661,16.661,0,0,0,14.325,5.1c-2.754,0-4.466,1.757-4.466,4.585V11.5H7.693a.5.5,0,0,0-.5.5v3.035a.5.5,0,0,0,.5.5H9.859v6.234a10,10,0,1,1,4.282,0Z"/>
			</svg>
		</a>
		<a target="_blank" rel="noopener" data-testid="SocialIcon" href="https://twitter.com/eileentownsg" aria-label="Eileen Town twitter" class="sc-eCssSg gsOJfM SocialIconItem__StyledLink-sc-19ivton-0 saVRV">
			<svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" class="sc-gKsewC dzFiqz">
				<path d="M8.1,21.034A12.717,12.717,0,0,1,1.23,19.019a.5.5,0,0,1,.329-.917,8.273,8.273,0,0,0,4.992-1,4.807,4.807,0,0,1-3.173-3.13.5.5,0,0,1,.348-.636A4.821,4.821,0,0,1,1.843,9.523a.548.548,0,0,1,.247-.458.506.506,0,0,1,.5-.034l.091.049A4.816,4.816,0,0,1,2.529,4a.507.507,0,0,1,.393-.247.5.5,0,0,1,.427.183,11.781,11.781,0,0,0,7.9,4.27c-.013-.144-.02-.289-.02-.435a4.81,4.81,0,0,1,8.116-3.493,8.157,8.157,0,0,0,2.32-.93.5.5,0,0,1,.73.583,4.781,4.781,0,0,1-.662,1.32c.191-.067.378-.143.563-.225a.5.5,0,0,1,.585.135.5.5,0,0,1,.034.6,9.2,9.2,0,0,1-2.057,2.2c0,.1,0,.208,0,.313A12.636,12.636,0,0,1,8.1,21.034ZM3.527,19.105a11.72,11.72,0,0,0,4.577.929A11.645,11.645,0,0,0,19.863,8.275c0-.179,0-.357-.012-.533a.5.5,0,0,1,.207-.43,8.181,8.181,0,0,0,.959-.81,9.068,9.068,0,0,1-.932.16.5.5,0,0,1-.316-.925,3.857,3.857,0,0,0,.977-.837,9.013,9.013,0,0,1-1.465.418.5.5,0,0,1-.461-.148,3.812,3.812,0,0,0-6.491,3.473.5.5,0,0,1-.1.434.489.489,0,0,1-.409.179A12.772,12.772,0,0,1,3.09,5.167,3.812,3.812,0,0,0,4.573,9.591a.5.5,0,0,1,.2.569.523.523,0,0,1-.491.347,4.772,4.772,0,0,1-1.36-.242A3.813,3.813,0,0,0,5.9,13.257a.5.5,0,0,1,.033.972,6.63,6.63,0,0,1-1.279.17,3.809,3.809,0,0,0,3.236,1.914.5.5,0,0,1,.3.894A9.081,9.081,0,0,1,3.527,19.105Z"/>
			</svg>
		</a>
		<a target="_blank" rel="noopener" data-testid="SocialIcon" href="https://instagram.com/eileentownsg" aria-label="Eileen Town instagram" class="sc-eCssSg gsOJfM SocialIconItem__StyledLink-sc-19ivton-0 saVRV">
			<svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" class="sc-gKsewC dzFiqz">
				<path d="M21.938,7.71a7.329,7.329,0,0,0-.456-2.394,4.615,4.615,0,0,0-1.1-1.694,4.61,4.61,0,0,0-1.7-1.1,7.318,7.318,0,0,0-2.393-.456C15.185,2.012,14.817,2,12,2s-3.185.012-4.29.062a7.329,7.329,0,0,0-2.394.456,4.615,4.615,0,0,0-1.694,1.1,4.61,4.61,0,0,0-1.1,1.7A7.318,7.318,0,0,0,2.062,7.71C2.012,8.814,2,9.182,2,12s.012,3.186.062,4.29a7.329,7.329,0,0,0,.456,2.394,4.615,4.615,0,0,0,1.1,1.694,4.61,4.61,0,0,0,1.7,1.1,7.318,7.318,0,0,0,2.393.456c1.1.05,1.472.062,4.29.062s3.186-.012,4.29-.062a7.329,7.329,0,0,0,2.394-.456,4.9,4.9,0,0,0,2.8-2.8,7.318,7.318,0,0,0,.456-2.393c.05-1.1.062-1.472.062-4.29S21.988,8.814,21.938,7.71Zm-1,8.534a6.351,6.351,0,0,1-.388,2.077,3.9,3.9,0,0,1-2.228,2.229,6.363,6.363,0,0,1-2.078.388C15.159,20.988,14.8,21,12,21s-3.159-.012-4.244-.062a6.351,6.351,0,0,1-2.077-.388,3.627,3.627,0,0,1-1.35-.879,3.631,3.631,0,0,1-.879-1.349,6.363,6.363,0,0,1-.388-2.078C3.012,15.159,3,14.8,3,12s.012-3.159.062-4.244A6.351,6.351,0,0,1,3.45,5.679a3.627,3.627,0,0,1,.879-1.35A3.631,3.631,0,0,1,5.678,3.45a6.363,6.363,0,0,1,2.078-.388C8.842,3.012,9.205,3,12,3s3.158.012,4.244.062a6.351,6.351,0,0,1,2.077.388,3.627,3.627,0,0,1,1.35.879,3.631,3.631,0,0,1,.879,1.349,6.363,6.363,0,0,1,.388,2.078C20.988,8.841,21,9.2,21,12S20.988,15.159,20.938,16.244Z"/>
				<path d="M17.581,5.467a.953.953,0,1,0,.952.952A.954.954,0,0,0,17.581,5.467Z"/>
				<path d="M12,7.073A4.927,4.927,0,1,0,16.927,12,4.932,4.932,0,0,0,12,7.073Zm0,8.854A3.927,3.927,0,1,1,15.927,12,3.932,3.932,0,0,1,12,15.927Z"/>
			</svg>
		</a>
		<a target="_blank" rel="noopener" data-testid="SocialIcon" href="https://tiktok.com/@eileentownsg" aria-label="Eileen Town tiktok" class="sc-eCssSg gsOJfM SocialIconItem__StyledLink-sc-19ivton-0 saVRV">
			<svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" class="sc-gKsewC dzFiqz">
				<path d="M9.37,23.5a7.468,7.468,0,0,1,0-14.936.537.537,0,0,1,.538.5v3.8a.542.542,0,0,1-.5.5,2.671,2.671,0,1,0,2.645,2.669.432.432,0,0,1,0-.05V1a.5.5,0,0,1,.5-.5h3.787a.5.5,0,0,1,.5.5A4.759,4.759,0,0,0,21.59,5.76a.5.5,0,0,1,.5.5L22.1,10a.533.533,0,0,1-.519.515,9.427,9.427,0,0,1-4.741-1.268v6.789A7.476,7.476,0,0,1,9.37,23.5ZM8.908,9.585a6.466,6.466,0,1,0,6.93,6.447V8.326a.5.5,0,0,1,.791-.407A8.441,8.441,0,0,0,21.1,9.5l-.006-2.76A5.761,5.761,0,0,1,15.859,1.5H13.051V16.032a.458.458,0,0,1,0,.053,3.672,3.672,0,1,1-4.14-3.695Z"/>
			</svg>
		</a>
		<a target="_blank" rel="noopener" data-testid="SocialIcon" href="https://www.youtube.com/eileentown" aria-label="Eileen Town youtube" class="sc-eCssSg gsOJfM SocialIconItem__StyledLink-sc-19ivton-0 saVRV">
			<svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" class="sc-gKsewC dzFiqz">
				<path d="M12,20.55c-.3,0-7.279-.006-9.115-.5A3.375,3.375,0,0,1,.5,17.665,29.809,29.809,0,0,1,0,12,29.824,29.824,0,0,1,.5,6.334,3.375,3.375,0,0,1,2.885,3.948c1.836-.492,8.819-.5,9.115-.5s7.279.006,9.115.5A3.384,3.384,0,0,1,23.5,6.334,29.97,29.97,0,0,1,24,12a29.97,29.97,0,0,1-.5,5.666,3.384,3.384,0,0,1-2.388,2.386C19.279,20.544,12.3,20.55,12,20.55Zm0-16.1c-.072,0-7.146.006-8.857.464A2.377,2.377,0,0,0,1.464,6.593,29.566,29.566,0,0,0,1,12a29.566,29.566,0,0,0,.464,5.407,2.377,2.377,0,0,0,1.679,1.679c1.711.458,8.785.464,8.857.464s7.146-.006,8.857-.464a2.377,2.377,0,0,0,1.679-1.679A29.66,29.66,0,0,0,23,12a29.66,29.66,0,0,0-.464-5.407h0a2.377,2.377,0,0,0-1.679-1.679C19.146,4.456,12.071,4.45,12,4.45ZM9.7,15.95a.5.5,0,0,1-.5-.5V8.55a.5.5,0,0,1,.75-.433l5.975,3.45a.5.5,0,0,1,0,.866L9.95,15.883A.5.5,0,0,1,9.7,15.95Zm.5-6.534v5.168L14.675,12Z"/>
			</svg>
		</a>
		<a target="_blank" rel="noopener" data-testid="SocialIcon" href="https://www.linkedin.com/company/eileentownsg" aria-label="Eileen Town linkedin" class="sc-eCssSg gsOJfM SocialIconItem__StyledLink-sc-19ivton-0 saVRV">
			<svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" class="sc-gKsewC dzFiqz">
				<path d="M4.425,1.671A2.738,2.738,0,0,0,1.5,4.4,2.71,2.71,0,0,0,4.369,7.128H4.4a2.734,2.734,0,1,0,.028-5.457ZM4.4,6.128H4.369a1.736,1.736,0,1,1,.056-3.457A1.737,1.737,0,1,1,4.4,6.128Z"/>
				<path d="M6.541,8.431H2.253a.5.5,0,0,0-.5.5v12.9a.5.5,0,0,0,.5.5H6.541a.5.5,0,0,0,.5-.5V8.931A.5.5,0,0,0,6.541,8.431Zm-.5,12.9H2.753V9.431H6.041Z"/>
				<path d="M17.064,8.128A4.691,4.691,0,0,0,13.7,9.362V8.931a.5.5,0,0,0-.5-.5H8.914a.5.5,0,0,0-.5.523c.053,1.183,0,12.756,0,12.873a.5.5,0,0,0,.5.5H13.2a.5.5,0,0,0,.5-.5v-7.2a2.749,2.749,0,0,1,.1-.86,1.869,1.869,0,0,1,1.737-1.254c.413,0,1.671,0,1.671,2.417v6.9a.5.5,0,0,0,.5.5H22a.5.5,0,0,0,.5-.5v-7.4C22.5,10.485,20.467,8.128,17.064,8.128Zm4.436,13.2H18.213v-6.4c0-2.973-1.673-3.417-2.671-3.417a2.83,2.83,0,0,0-2.664,1.878,3.253,3.253,0,0,0-.177,1.236v6.7H9.416c.009-2.058.04-9.654.009-11.9H12.7v1.328a.5.5,0,0,0,.92.272,3.769,3.769,0,0,1,3.443-1.9c2.819,0,4.436,1.934,4.436,5.305Z"/>
			</svg>
		</a>
		<a target="_blank" rel="noopener" data-testid="SocialIcon" href="https://www.pinterest.com/eileentownsg" aria-label="Eileen Town pinterest" class="sc-eCssSg gsOJfM SocialIconItem__StyledLink-sc-19ivton-0 saVRV">
			<svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" class="sc-gKsewC dzFiqz">
				<path d="M7.615,23a.522.522,0,0,1-.11-.012.5.5,0,0,1-.386-.429l-.166-1.4A12.6,12.6,0,0,1,7,17.381c.205-.882,1.223-5.2,1.432-6.091a5.332,5.332,0,0,1-.348-1.907c0-1.992,1.219-3.552,2.776-3.552A2.07,2.07,0,0,1,12.956,8.1a10.218,10.218,0,0,1-.6,2.723c-.161.523-.328,1.06-.454,1.584a1.3,1.3,0,0,0,.225,1.133,1.441,1.441,0,0,0,1.15.525c2,0,3.452-2.209,3.452-5.252A4.482,4.482,0,0,0,11.969,4.2,4.957,4.957,0,0,0,6.79,9.155a4.7,4.7,0,0,0,.457,1.963.873.873,0,0,1,.063.584l-.428,1.816a.79.79,0,0,1-.515.571.813.813,0,0,1-.776-.139A6.575,6.575,0,0,1,3.472,9.1c0-3.9,2.756-8.1,8.807-8.1,4.7,0,8.249,3.337,8.249,7.762,0,4.743-3.017,8.321-7.018,8.321a4.281,4.281,0,0,1-2.635-.9l-.543,2.069a14.305,14.305,0,0,1-1.62,3.435l-.673,1.079A.5.5,0,0,1,7.615,23ZM10.862,6.831c-.995,0-1.776,1.121-1.776,2.552a4.149,4.149,0,0,0,.322,1.642.514.514,0,0,1,.037.334s-1.24,5.264-1.468,6.246a11.938,11.938,0,0,0-.034,3.422A12.932,12.932,0,0,0,9.364,18l.787-2.993a.5.5,0,0,1,.43-.37.51.51,0,0,1,.5.269,2.849,2.849,0,0,0,2.43,1.177c3.431,0,6.018-3.148,6.018-7.321C19.528,4.907,16.412,2,12.279,2,6.916,2,4.472,5.682,4.472,9.1a5.769,5.769,0,0,0,1.514,3.859l.351-1.492A5.224,5.224,0,0,1,5.79,9.155,5.937,5.937,0,0,1,11.969,3.2a5.438,5.438,0,0,1,5.755,5.61c0,3.623-1.872,6.252-4.452,6.252a2.44,2.44,0,0,1-1.936-.9,2.283,2.283,0,0,1-.412-1.987c.132-.545.3-1.1.472-1.646a9.754,9.754,0,0,0,.56-2.427A1.11,1.11,0,0,0,10.862,6.831Z"/>
			</svg>
		</a>
		<a target="_blank" rel="noopener" data-testid="SocialIcon" href="https://t.me/eileentownsg" aria-label="Eileen Town telegram" class="sc-eCssSg gsOJfM SocialIconItem__StyledLink-sc-19ivton-0 saVRV">
			<svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" class="sc-gKsewC dzFiqz">
				<path d="M11 0a11 11 0 1011 11A11.012 11.012 0 0011 0zm0 21a10 10 0 1110-10 10.011 10.011 0 01-10 10zm4.464-15.366a2.405 2.405 0 00-.821.155c-.114.047-2.402.985-3.101 1.29L4.489 9.984c-.827.323-1.284.801-1.342 1.416a1.414 1.414 0 00.677 1.298l.097.06.108.038c.044.015 1.091.373 2.01.649a3.527 3.527 0 001.01.156 2.31 2.31 0 001.203-.296l.07-.047-.001.044a1.617 1.617 0 00.602 1.219c.67.566 2.133 1.523 2.836 1.982.15.099.257.168.296.195a3.755 3.755 0 001.939.752 1.71 1.71 0 00.39-.044 1.859 1.859 0 001.34-1.665l.755-4.736.198-1.295c.193-1.254.304-1.98.327-2.31a1.626 1.626 0 00-.388-1.289 1.534 1.534 0 00-1.152-.477zm.027 5.214l-.759 4.765s-.06.698-.576.82a.707.707 0 01-.162.017 2.892 2.892 0 01-1.356-.564c-.121-.091-2.276-1.457-3.065-2.124a.575.575 0 01.03-.972 115.996 115.996 0 003.187-3.034c.236-.236.472-.676.196-.676a2.37 2.37 0 00-.985.494l-4.279 2.883a1.353 1.353 0 01-.673.144 2.514 2.514 0 01-.723-.114c-.91-.273-1.972-.637-1.972-.637s-.729-.456.515-.941l7.071-2.913c.698-.304 3.065-1.275 3.065-1.275a1.44 1.44 0 01.46-.087c.286 0 .592.128.542.694-.03.425-.273 1.912-.516 3.52z"/>
			</svg>
		</a>
	</div>
</div>
</body>
</html>
    
    </Layout>
  );
};

export default IndexPage;
