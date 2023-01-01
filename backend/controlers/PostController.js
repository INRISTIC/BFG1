import PostModel from "../models/Post.js";

export const getAll = async (req, res) => {
  try {
    const posts = await PostModel.find();

    res.json(posts);
  } catch (err) {
    res.status(500).json({
      message: "Не удалось получить статьи",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const postId = req.params.id;

    PostModel.findOneAndUpdate(
      {
        _id: postId,
      },
      {
        $inc: { viewsCount: 1 },
      },
      {
        returnDocument: "after",
      },
      (err, doc) => {
        if (err) {
          return res.status(500).json({
            message: "Не удалось вернуть статью",
          });
        }

        if (!doc) {
          return res.status(404).json({
            message: "Статья не найдена",
          });
        }

        res.json(doc);
      }
    );
  } catch (err) {
    res.status(500).json({
      message: "Не удалось получить статьи",
    });
  }
};

export const create = async (req, res) => {

  try {
    const doc = new PostModel({
      id: req.body.id,
      title_ua: req.body.title_ua,
      title_en: req.body.title_en,
      title_ru: req.body.title_ru,
      content_ua: req.body.content_ua,
      content_en: req.body.content_en,
      content_ru: req.body.content_ru,
    });

    const post = await doc.save();

    res.json(post);
  } catch (err) {
    res.status(500).json({
      message: "Не удалось создать статью",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const postId = req.params.id;

    PostModel.findOneAndDelete(
      {
        _id: postId,
      },
      (err, doc) => {
        if (err) {
          return res.status(500).json({
            message: "Не удалось удалить статью",
          });
        }

        if (!doc) {
          return res.status(404).json({
            message: "Статья не найдена",
          });
        }

        res.json({
          success: true,
        });
      }
    );
  } catch (err) {
    res.status(500).json({
      message: "Не удалось получить статьи",
    });
  }
};

export const update = async (req, res) => {
  try {
    const postId = req.params.id;

    await PostModel.updateOne(
      {
        _id: postId,
      },
      {
        title: req.body.title,
        text: req.body.text,
        imageUrl: req.body.imageUrl,
        tags: req.body.imageUrl,
        user: req.userId,
      },
    );

    res.json({
      success: true,
    });
  } catch(err) {
    res.status(500).json({
      message: "Не удалось обновить статью",
    });
  }
};
