import querystring from 'query-string';

import clientAPI from '../../clients/deputados-api';

const orgaos = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const { data } = await clientAPI.get(`/orgaos?${query}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const orgao = async (_, { id }) => {
  try {
    const { data } = await clientAPI.get(`/orgaos/${id}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const orgaoEventos = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const { data } = await clientAPI.get(`/orgaos/${args.id}/eventos?${query}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const orgaoMembros = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const { data } = await clientAPI.get(`/orgaos/${args.id}/membros?${query}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const orgaoSituacoes = async () => {
  try {
    const { data } = await clientAPI.get('/referencias/orgaos/idSituacao');
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

export default {
  orgaos,
  orgao,
  orgaoEventos,
  orgaoMembros,
  orgaoSituacoes,
};
