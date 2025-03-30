import { LuBeef, LuPizza, LuSoup } from "react-icons/lu";
import { GiChickenOven, GiSushis } from "react-icons/gi";
import { CiCoffeeCup } from "react-icons/ci";
import { IoStorefrontOutline } from "react-icons/io5";
import { MdOutlineFastfood, MdOutlineNightsStay, MdOutlineRamenDining } from "react-icons/md";
import { BiBowlRice, BiFoodMenu } from "react-icons/bi";

export const categoryObj = [
  { id: "all", name: "전체보기", icon: BiFoodMenu },
  { id: "fastFood", name: "패스트푸드", icon: MdOutlineFastfood },
  { id: "chicken", name: "치킨", icon: GiChickenOven },
  { id: "western", name: "피자/양식", icon: LuPizza },
  { id: "soup", name: "찜/탕", icon: LuSoup },
  { id: "chinese", name: "중국집", icon: MdOutlineRamenDining },
  { id: "korean", name: "한식", icon: BiBowlRice },
  { id: "japaneseAndCutlet", name: "일식/돈까스", icon: GiSushis },
  { id: "jokbalAndBossam", name: "족발/보쌈", icon: LuBeef },
  { id: "midnight", name: "야식", icon: MdOutlineNightsStay },
  { id: "cafeAndDessert", name: "카페/디저트", icon: CiCoffeeCup },
  { id: "convenienceStoreAndMart", name: "편의점/마트", icon: IoStorefrontOutline },
];
