import Button from "@/components/Button/Button";
import Heading from "@/components/Heading/Heading";
import Paragraph from "@/components/Paragraph/Paragraph";
import Subtitle from "@/components/Subtitle/Subtitle";

export default function Home() {
  return (
    <>
      <Heading variant="sm">Heading Sm</Heading>
      <Subtitle variant="sm">Subtitle Sm</Subtitle>
      <Paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the lleap into electronic typesetting, remaining
        essentially unchanged.
      </Paragraph>
      <Button variant="primary">Button Label</Button>
    </>
  );
}
