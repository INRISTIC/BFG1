import { body } from "express-validator";

export const registerValidation = [
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Пароль должен быть минимум 5 символов").isLength({
    min: 5,
  }),
  body("fullName", "Укажите имя").isLength({ min: 3 }),
  body("avatarUrl", "Неверная ссылка на аватарку").optional().isURL(),
];

export const loginValidation = [
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Пароль должен быть минимум 5 символов").isLength({
    min: 5,
  })
];

export const postCreateValidation = [
  body("id", "Неверный id").isNumeric(),
  body("title_ua", "Неверный формат почты").isLength({ min: 3}).isString(),
  body("title_en", "Неверный формат почты").isLength({ min: 3}).isString(),
  body("title_ru", "Неверный формат почты").isLength({ min: 3}).isString(),
  body('content_ua', 'Введите текст статьи').isLength({ min: 3 }).isString(),
  body('content_en', 'Введите текст статьи').isLength({ min: 3 }).isString(),
  body('content_ru', 'Введите текст статьи').isLength({ min: 3 }).isString(),
];

export const photosCreateValidation = [
  body("id", "Неверный id").isNumeric(),
  body('photo_src', 'Введите текст статьи').isString(),
];

export const regulationCreateValidation = [
  body("id", "Неверный id").isNumeric(),
  body('content_ua', 'Введите текст статьи').isLength({ min: 3 }).isString(),
  body('content_en', 'Введите текст статьи').isLength({ min: 3 }).isString(),
  body('content_ru', 'Введите текст статьи').isLength({ min: 3 }).isString(),
];

export const faqCreateValidation = [
  body("id", "Неверный id").isNumeric(),
  body('content_ua', 'Введите текст статьи').isLength({ min: 3 }).isString(),
  body('content_en', 'Введите текст статьи').isLength({ min: 3 }).isString(),
  body('content_ru', 'Введите текст статьи').isLength({ min: 3 }).isString(),
];

export const privilegeCreateValidation = [
  body("id", "Неверный id").isNumeric(),
  body('content_ua', 'Введите текст статьи').isLength({ min: 3 }).isString(),
  body('content_en', 'Введите текст статьи').isLength({ min: 3 }).isString(),
  body('content_ru', 'Введите текст статьи').isLength({ min: 3 }).isString(),
];

export const settingsCreateValidation = [
  body("id", "Неверный id").isNumeric(),
  body('online', 'Введите кол-во онлайн пользователей').isNumeric(),
  body('users_count', 'Введите кол-во пользователей').isNumeric(),
  body('users_sms', 'Введите количество смс').isNumeric(),
  body('cf_donat', 'Введите текст статьи').isNumeric(),
  body('cf_donat_min', 'Введите минимальный донат').isNumeric(),
  body('cf_donat_max', 'Введите максимальны донат').isNumeric(),
];