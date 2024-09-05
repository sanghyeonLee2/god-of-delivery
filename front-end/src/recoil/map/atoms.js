import {atom, selector} from "recoil";

export const coordsState = atom({
    key: "coords",
    default: {
        center: {lat: 33.450701, lng: 126.570667},
        isPanto: false
    }
})
export const addressState = selector({
        key: "address",
        get: async ({get}) => {
            const geocoder = new window.kakao.maps.services.Geocoder()
            const {lng, lat} = get(coordsState).center
            return await new Promise((resolve, reject) => {
                geocoder.coord2Address(lng, lat, (result, status) => {
                    if (status === window.kakao.maps.services.Status.OK) {
                        const addressName = result[0].address?.address_name
                        const roadAddress = result[0].road_address?.address_name
                        resolve({addressName, roadAddress})
                    } else {
                        reject(new Error("주소를 불러오는데 실패했습니다. 상태 코드:" + status))
                    }
                })
            })
        }
    },
)

