import { getHttpError } from "../services/security-client";
import { ServiceClient } from "perron";
import {
  AddPolicyRequest,
  AddPolicyResponse,
  GetPoliciesResponse,
  PoliciesQueryFilter,
  RemovePolicyRequest,
} from "../defs/policy";

export const policy = (serviceClient: ServiceClient) => ({
  addPolicy(request: AddPolicyRequest): Promise<AddPolicyResponse> {
    return serviceClient
      .request({
        pathname: "/api/policy/get-policies",
        method: "POST",
        body: JSON.stringify({ ...request }),
      })
      .then((response) => response.body as AddPolicyResponse)
      .catch((error) => {
        throw getHttpError(error);
      });
  },

  getPolicies(queryFilter: PoliciesQueryFilter) {
    return serviceClient
      .request({
        pathname: "/api/policy/get-policies",
        method: "GET",
        query: queryFilter,
      })
      .then((response) => response.body as GetPoliciesResponse)
      .catch((error) => {
        throw getHttpError(error);
      });
  },

  async removePolicy(request: RemovePolicyRequest): Promise<void> {
    await serviceClient
      .request({
        pathname: "/api/policy/remove-policy",
        method: "DELETE",
        query: {
          ...request,
        },
      })
      .catch((error) => {
        throw getHttpError(error);
      });
  },
});