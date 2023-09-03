import { Notes } from "../Models/notesModel.js";
import ErrorHandler from "../middlewares/error.js";

export const createNote = async (req, res, next) => {
  try {
    const { title, desc, tag } = req.body;
    await Notes.create({
      title,
      desc,
      tag,
      user: req.user,
    });
    res.status(201).json({
      success: true,
      message: "Notes added succesfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getMyNotes = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const notes = await Notes.find({ user: userId });

    res.status(200).json({
      success: true,
      notes,
    });
  } catch (error) {
    next(error);
  }
};

export const updateNote = async (req, res, next) => {
  try {
    const { title, desc, tag } = req.body;
    const note = await Notes.findById(req.params.id);

    if (!note) return next(new ErrorHandler("Invalid request", 404));

    note.title = title;
    note.desc = desc;
    note.tag = tag;

    await note.save();

    res.status(200).json({
      success: true,
      message: "note updated successfully",
      updatedNote: note,
    });
  } catch (error) {
    next(error);
  }
};
export const deleteNote = async (req, res, next) => {
  try {
    const note = await Notes.findById(req.params.id);

    if (!note) return next(new ErrorHandler("Invalid request", 404));

    await note.deleteOne();
    res.status(200).json({
      suceess: true,
      message: "Note deleted",
    });
  } catch (error) {
    next(error);
  }
};
