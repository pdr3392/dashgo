import { createServer, Factory, Model } from "miragejs";
import faker from "faker";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },
    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },
    seeds(server) {
      server.createList("user", 10);
    },
    routes() {
      this.namespace = "api";
      this.timing = 750;
      // o timing aqui serve para testar a UI/UX e evitar que os carregamentos
      // sejam instantâneos, observando se os spinners, por exemplo, estão funcionando

      this.get("/users");
      this.post("/users");

      this.namespace = "";
      // o mirage inicializa o namespace "api", define as rotas (ex: "users")
      // e, por fim, libera o namespace "api" para caso o Next esteja usando-o
      this.passthrough();
      // faz a checagem se as chamadas api com namespace "api", por exemplo, são
      // de responsabilidade do mirage ou não
    },
  });

  return server;
}
