export function listProblemsRequest(deliveryId) {
  return {
    type: '@problems/LIST_REQUEST',
    payload: { deliveryId },
  };
}

export function listProblemsSuccess(deliveryId, problems) {
  return {
    type: '@problems/LIST_SUCCESS',
    payload: { deliveryId, problems },
  };
}

export function listProblemsFailure() {
  return {
    type: '@problems/LIST_FAILURE',
  };
}

export function registerProblem(deliveryId, description) {
  return {
    type: '@problems/REGISTER_REQUEST',
    payload: { deliveryId, description },
  };
}

export function registerProblemSuccess() {
  return {
    type: '@problems/REGISTER_SUCCESS',
  };
}

export function registerProblemFailure() {
  return {
    type: '@problems/REGISTER_FAILURE',
  };
}
