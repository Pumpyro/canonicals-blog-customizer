import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useState } from 'react';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	defaultArticleState,
	OptionType,
	backgroundColors,
	contentWidthArr,
	ArticleStateType,
} from 'src/constants/articleProps';

import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import { Spacing } from '../spacing';
import { Separator } from '../separator';
import { Text } from '../text';

interface ArticleParamsFormProps {
	articleState: ArticleStateType;
	onChange: (changedArticleState: ArticleStateType) => void;
}

export const ArticleParamsForm = ({
	articleState,
	onChange,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const toggle = () => {
		setIsOpen((prev) => !prev);
	};
	const [fontFamily, setFontFamily] = useState<OptionType>(
		articleState.fontFamilyOption
	);

	const [fontSize, setFontSize] = useState<OptionType>(
		articleState.fontSizeOption
	);
	const [fontColor, setFontColor] = useState<OptionType>(
		articleState.fontColor
	);
	const [backgroundColor, setBackgroundColor] = useState<OptionType>(
		articleState.backgroundColor
	);
	const [contentWidth, setContentWidth] = useState<OptionType>(
		articleState.contentWidth
	);
	return (
		<>
			<ArrowButton state={isOpen} onClick={toggle} />
			<aside
				className={clsx(
					styles.container,
					isOpen ? styles.container_open : null
				)}>
				<form className={styles.form}>
					<Text size={31} weight={800} uppercase={true} family='open-sans'>
						Задайте параметры
					</Text>
					<Spacing size={50} />
					<Select
						selected={fontFamily}
						options={fontFamilyOptions}
						onChange={setFontFamily}
						title='ШРИФТ'></Select>
					<Spacing size={50} />
					<RadioGroup
						name='font-sizes'
						selected={fontSize}
						options={fontSizeOptions}
						onChange={setFontSize}
						title='РАЗМЕР ШРИФТА'></RadioGroup>
					<Spacing size={50} />
					<Select
						selected={fontColor}
						options={fontColors}
						onChange={setFontColor}
						title='ЦВЕТ ШРИФТА'></Select>
					<Spacing size={50} />
					<Separator />
					<Spacing size={50} />
					<Select
						selected={backgroundColor}
						options={backgroundColors}
						onChange={setBackgroundColor}
						title='ЦВЕТ ФОНА'></Select>
					<Spacing size={50} />
					<Select
						selected={contentWidth}
						options={contentWidthArr}
						onChange={setContentWidth}
						title='ШИРИНА КОНТЕНТА'></Select>
					<Spacing size={72} />
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='reset'
							onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
								e.preventDefault();
								onChange(defaultArticleState);
							}}
						/>
						<Button
							title='Применить'
							type='submit'
							onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
								e.preventDefault();
								onChange({
									fontFamilyOption: fontFamily,
									fontSizeOption: fontSize,
									fontColor: fontColor,
									backgroundColor: backgroundColor,
									contentWidth: contentWidth,
								});
							}}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
