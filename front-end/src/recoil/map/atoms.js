import {atom, selector} from "recoil";

export const coordsState = atom({
    key: "coords",
    default: {
        lat: 37.496486063, lng: 127.028361548
    }
})
export const addressState = selector({
        key: "address",
        get: async ({get}) => {
            const geocoder = new window.kakao.maps.services.Geocoder()
            const {lng, lat} = get(coordsState)
            return await new Promise((resolve, reject) => {
                geocoder.coord2Address(lng, lat, (result, status) => {
                    if (status === window.kakao.maps.services.Status.OK) {
                        const address = result[0].address?.address_name
                        const roadInfo = result[0].road_address?.address_name
                        resolve({address, roadInfo, lng, lat})
                    } else {
                        reject(new Error("주소를 불러오는데 실패했습니다. 상태 코드:" + status))
                    }
                })
            })
        }
    },
)

