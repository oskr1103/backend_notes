//importamos el modelo
import BlogModel from "../models/BlogModel.js";

//**    Metodos para el CRUD */

//Mostrar todos los blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Mostrar un blog por su id, en este caso se puede usar findAll pero se debe usar en la respuesta de json un array en su posición 0, esto para conexión por mysql
export const getBlog = async (req, res) => {
  try {
    const id = req.params.id;
    await BlogModel.findById({
      _id: id,
    }).then((blog) => {
      res.status(200).json(blog);
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Crear un nuevo blog
export const createBlog = async (req, res) => {
  try {
    await BlogModel.create(req.body);
    res.status(200).json({ message: "Nota creada correctamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Actualizar un blog
export const updateBlog = async (req, res) => {
  try {
    const id = req.params.id;
    await BlogModel.updateOne({ _id: id }, req.body).then((res) => {
      console.log(res);
    });
    res.status(200).json({ message: "Blog actualizado" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Eliminar un blog
export const deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;
    await BlogModel.deleteOne({ _id: id }).then((res) => {
      console.log(res);
    });
    res.status(200).json({ message: "Blog eliminado" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
