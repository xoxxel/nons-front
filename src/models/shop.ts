interface ShopModel {
    id: number,
    user: { id: number, name: string },
    is_active: boolean,
    title_en: string,
    title: string,
    welcome_message: string,
    image: string,
    is_authenticated: boolean,
    tags: { id: number, title: string },
    date_created: string,
    score: number,
    score_count: number,
    is_online: boolean,
    product_count: number,
    status: "is_confirmed" | "waiting" | "suspended"
  }