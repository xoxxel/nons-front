interface NotificationModel {
        id: number,
        text: string,
        notification_type: string,
        date_created: Date,
        user: number,
        is_seen:boolean,
        sender :{ name: string, image: string }
}