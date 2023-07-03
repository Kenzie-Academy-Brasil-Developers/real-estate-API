import { Request, Response, NextFunction } from 'express';
import categoryServices from '../services/category.services';
import { categoryRepository } from '../repositories';
import { CategoryCreate, CategoryRead, CategoryReturn } from '../interfaces';

const createCategory = async (
  req: Request,
  res: Response,
  nex: NextFunction
): Promise<Response> => {
  const allCategories: CategoryCreate = await categoryServices.createCategory(req.body);

  return res.status(201).json(allCategories);
};

const getAllCategories = async (
  req: Request,
  res: Response,
  nex: NextFunction
): Promise<Response> => {
  const allCategories: CategoryRead = await categoryServices.getAllCategories();

  return res.status(200).json(allCategories);
};

const getCategoryById = async (
  req: Request,
  res: Response,
  nex: NextFunction
): Promise<Response> => {
  const categoryId = Number(req.params.id);

  const category: CategoryReturn = await categoryServices.getCategorybyId(categoryId);

  return res.status(200).json(category);
};

export default { createCategory, getAllCategories, getCategoryById };
