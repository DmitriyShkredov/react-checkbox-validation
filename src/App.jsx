import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSignUp } from "./schemas";
import { Checkbox } from "./Checkbox/Checkbox";

function App() {
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaSignUp),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <section>
      <FormProvider {...methods}>
        <form className="form" onSubmit={methods.handleSubmit(onSubmit)}>
          <Checkbox name="rules">
            Принимаю <a href="./documents/rules.pdf">правила</a> участия в акции
          </Checkbox>
          <Checkbox name="mailings">Соглашаюсь на рассылку новостей</Checkbox>
          <button type="submit">Отправить</button>
        </form>
      </FormProvider>
    </section>
  );
}

export default App;
