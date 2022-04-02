import { Router, Request, Response } from "express";

export const router = Router();

router.get("/test", (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: "GET Test pasado correctamente"
    });
});

router.post("/test", (req: Request, res: Response) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    res.json({
        ok: true,
        cuerpo,
        de,
        message: "POST test pasado correctamente"
    });
});

router.post("/test/:id", (req: Request, res: Response) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;
    res.json({
        ok: true,
        cuerpo,
        de,
        id,
        message: "POST test pasado correctamente"
    });
});
