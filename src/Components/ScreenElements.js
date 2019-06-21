import React from 'react';
import Form from 'react-bootstrap/Form';


  const Elements = () => (
    <Form onSubmit={handleLogin} className="form1">
        <h1>Inicia Sesión</h1>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email </Form.Label>
    <Form.Control type="email" placeholder="Ingresa tu email" />
    <Form.Text className="text-muted">
      Nunca compartiremos tu email con nadie.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Contraseña</Form.Label>
    <Form.Control type="password" placeholder="Coloca tu contraseña " />
  </Form.Group>
  <Form.Label>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></Form.Label>
  <Button variant="outline-success" type="submit">
    ¡Vamos!
  </Button>
</Form>
  );
export default Elements;