import i18next from "i18next";
import I18NexFsBackend from "i18next-fs-backend";
import middleware from 'i18next-http-middleware';
import path from "path";
import {dir_path} from "./paths.js";

export let localization = (app) => {
    i18next.use(I18NexFsBackend)
        .use(middleware.LanguageDetector)
        .init(
            {
                fallbackLng : "en" ,
                backend : {
                    loadPath : path.join( dir_path , ".." , 'Localization') + "\\{{lng}}.json"
                }
            }
        );
    app.use(middleware.handle(i18next))
}