const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('inicio', { title: 'RV  IMORTACIONES - Inicio' });
});

router.get('/laptops', (req, res) => {
  res.render('laptops', { title: 'RV  IMORTACIONES - Laptops' });
});

router.get('/productos', (req, res) => {
  res.render('productos', { title: 'RV  IMORTACIONES - Productos' });
});

router.get('/nosotros', (req, res) => {
  res.render('trabajo', { title: 'RV  IMORTACIONES - Nuesto Trabajo' });
});

router.get('/servicios', (req, res) => {
  res.render('servicios', { title: 'RV  IMORTACIONES - Servicios' });
});

router.get('/contact', (req, res) => {
  res.render('contactos', { title: 'RV  IMORTACIONES - Contactos' });
});

module.exports = router;