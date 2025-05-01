import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState, useEffect } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	ArticleStateType,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [articleState, setArticleState] =
		useState<ArticleStateType>(defaultArticleState);

	const [fontFamily, setFontFamily] = useState<string>(
		defaultArticleState.fontFamilyOption.value
	);
	const [fontSize, setFontSize] = useState<string>(
		defaultArticleState.fontSizeOption.value
	);
	const [fontColor, setFontColor] = useState<string>(
		defaultArticleState.fontColor.value
	);
	const [backgroundColor, setBackgroundColor] = useState<string>(
		defaultArticleState.backgroundColor.value
	);
	const [contentWidth, setContentWidth] = useState<string>(
		defaultArticleState.contentWidth.value
	);

	useEffect(() => {
		setFontFamily(articleState.fontFamilyOption.value);
		setFontSize(articleState.fontSizeOption.value);
		setFontColor(articleState.fontColor.value);
		setBackgroundColor(articleState.backgroundColor.value);
		setContentWidth(articleState.contentWidth.value);
	}, [articleState]);

	const handleChange = (changedArticleState: ArticleStateType) => {
		setArticleState(changedArticleState);
	};
	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': fontFamily,
					'--font-size': fontSize,
					'--font-color': fontColor,
					'--container-width': contentWidth,
					'--bg-color': backgroundColor,
				} as CSSProperties
			}>
			<ArticleParamsForm articleState={articleState} onChange={handleChange} />
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
