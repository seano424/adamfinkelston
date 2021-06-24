import { MdPeople } from "react-icons/md";
export default {
  name: "social",
  type: "document",
  title: "Social",
  icon: MdPeople,
  fields: [
    {
      name: "channel",
      type: "string",
      options: {
        list: ["twitter", "instagram", "linkedin", "facebook"],
      },
    },
    {
      name: "link",
      type: "url",
    },
    // {
    //   name: "attachment",
    //   type: "image",
    //   title: "Attachment",
    //   options: { hotspot: true },
    // },
  ],
};
