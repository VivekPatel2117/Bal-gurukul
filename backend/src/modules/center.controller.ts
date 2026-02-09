import { Request, Response } from "express";
import {
  createCenterService,
  getCentersService,
  getCenterByIdService,
} from "./center.service";

export const createCenter = async (req: Request, res: Response) => {
  try {
    const center = await createCenterService(req.body);

    res.status(201).json({
      success: true,
      message: "Center created successfully",
      data: center,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCenters = async (_req: Request, res: Response) => {
  const centers = await getCentersService();
  res.json({ success: true, data: centers });
};

export const getCenterById = async (req: Request, res: Response) => {
  const center = await getCenterByIdService(req.params.id as string);

  if (!center) {
    return res.status(404).json({ message: "Center not found" });
  }

  res.json({ success: true, data: center });
};
