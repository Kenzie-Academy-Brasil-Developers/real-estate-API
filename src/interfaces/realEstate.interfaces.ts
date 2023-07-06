import { z } from 'zod';
import {
  realEstateSchema,
  realEstateCreateSchema,
  realEstateReturnSchema,
  realEstateReadSchema,
  realEstateReturnFilterSchema,
  realEstateOnlySchema,
  realEstateOnlyWithoutNameSchema,
} from '../schemas';

import { RealEstate } from '../entities';
import { DeepPartial, Repository } from 'typeorm';

type RealEstateCreate = z.infer<typeof realEstateCreateSchema>;

type RealEstateReturn = z.infer<typeof realEstateReturnSchema>;

type RealEstateOnlyReturn = z.infer<typeof realEstateOnlyWithoutNameSchema>;

type RealEstateOnly = z.infer<typeof realEstateOnlySchema>;

type RealEstateRead = Array<RealEstateReturn>;

type RealEstateRepo = Repository<RealEstate>;

type RealEstateReturnFilter = z.infer<typeof realEstateReturnFilterSchema>;

export {
  RealEstateCreate,
  RealEstateRead,
  RealEstateReturn,
  RealEstateRepo,
  RealEstateReturnFilter,
  RealEstateOnlyReturn,
  RealEstateOnly,
};
