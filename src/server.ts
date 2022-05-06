import app from './app';

app.listen(3000, (): boolean =>
  process.stdout.write(`Server running at port http://localhost:3000`)
);
