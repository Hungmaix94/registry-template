import { FooterProps } from './types';
import { SimpleFooter } from './variant-simple';
import { MultiColumnFooter } from './variant-multi-column';
import { CenteredFooter } from './variant-centered';
import { CompanyInfoFooter } from './variant-company-info';
import { DarkFooter } from './variant-dark';

export const Footer = (props: FooterProps) => {
    const { variant } = props;

    switch (variant) {
        case 'simple':
            return <SimpleFooter {...props} />;
        case 'multi-column':
            return <MultiColumnFooter {...props} />;
        case 'centered':
            return <CenteredFooter {...props} />;
        case 'company-info':
            return <CompanyInfoFooter {...props} />;
        case 'dark':
            return <DarkFooter {...props} />;
        default:
            return <MultiColumnFooter {...props} />;
    }
};

export default Footer;
