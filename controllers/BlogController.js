//importamos el modelo
import BlogModel from "../models/BlogModel.js";

//**    Metodos para el CRUD */

//Mostrar todos los blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.findAll();
    res.json(blogs);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Mostrar un blog por su id, en este caso se puede usar findAll pero se debe usar en la respuesta de json un array en su posición 0
export const getBlog = async (req, res) => {
  try {
    const blog = await BlogModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(blog);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Crear un nuevo blog
export const createBlog = async (req, res) => {
  try {
    await BlogModel.create(req.body);
    res.json({ message: "Blog creado" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Actualizar un blog
export const updateBlog = async (req, res) => {
  try {
    await BlogModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ message: "Blog actualizado" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Eliminar un blog
export const deleteBlog = async (req, res) => {
  try {
    await BlogModel.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "Blog eliminado" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
