import express from "express";
import validator from "validator";
import users from "../models/users.js";


const router = express.Router();

router.get("/", async (req, res) => {
    res.json("hello");
});

router.post("/add", async (req, res, next) => {
    try {
        const { firstname, lastname, mail, password } = req.body;

        // Boş alan kontrolü
        if (!firstname || !lastname || !mail || !password) {
            return res.status(400).json({ msg: "Lütfen tüm alanları doldurun!" });
        }

        // Geçerli mail kontrolü
        if (!validator.isEmail(mail)) {
            return res.status(400).json({ msg: "Lütfen geçerli bir e-posta girin!" });
        }

        // Güçlü şifre kontrolü
        if (!validator.isStrongPassword(password, { minLength: 8, minNumbers: 2, minLowercase: 1, minUppercase: 1, minSymbols: 1 })) {
            return res.status(400).json({ msg: "Şifreniz en az 8 karakter uzunluğunda olmalı, en az 1 büyük harf, 1 küçük harf, 1 özel karakter ve 2 rakam içermelidir." });
        }

        // Kullanıcı oluştur
        const user = await users.create({ firstname, lastname, mail, password });

        res.status(201).json({ msg: "Kullanıcı başarıyla oluşturuldu", user });

    } catch (error) {
        next(error);
    }
});
export default router;
