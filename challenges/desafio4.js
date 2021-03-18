db.getCollection("produtos").updateOne(
  { nome: "Big Mac" },
  {
    $currentDate: { ultimaModificacao: true },
  },
);

db.getCollection("produtos").find(
  { nome: "Big Mac" },
  {
    nome: 1,
    ultimaModificacao: 1,
    _id: 0,
  },
);
