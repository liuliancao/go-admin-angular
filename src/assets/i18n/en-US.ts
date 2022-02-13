import dashboard from './en-US/dashboard';
import start from './en-US/start';
import personalize from './en-US/personalize';
import authGuard from './en-US/auth-guard';
import footer from './en-US/footer';
import header from './en-US/header';
import login from './en-US/login';

export default {
    ...dashboard,
    ...start,
    ...personalize,
    ...authGuard,
    ...footer,
    ...header,
    ...login
};
