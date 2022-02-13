import dashboard from './zh-CN/dashboard';
import start from './zh-CN/start';
import personalize from './zh-CN/personalize';
import authGuard from './zh-CN/auth-guard';
import footer from './zh-CN/footer';
import header from './zh-CN/header';
import login from './zh-CN/login';

export default {
    ...dashboard,
    ...start,
    ...personalize,
    ...authGuard,
    ...footer,
    ...header,
    ...login
};
