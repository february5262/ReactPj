import { CommonCode } from '@models/common/CommonCode';
import { CommonResponse } from '@models/common/CommonResponse';
import { Service } from '@models/common/Service';
import { callApi, Method } from '@utils/ApiUtil';

const commonApi = {
  getCommonCode: async (group: string, isLoading = true): Promise<CommonCode[]> => {
    const response: CommonResponse = await callApi({
      service: Service.MZP_BE,
      url: '/v1/codes',
      method: Method.GET,
      params: {
        queryParams: {
          group,
        },
      },
      config: {
        isLoading: isLoading,
      },
    });
    return (response.successOrNot === 'Y' ? response.data : null) as CommonCode[];
  },
};

export default commonApi;
