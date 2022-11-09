import React from 'react';
import { DollarInHand, LawOrder, List } from '../components/icons';

export function HowItWorks() {
  const workList = [
    {
      title: 'Reisedetails eingeben',
      text: [
        'Wir prüfen unter Einsatz modernster Technologie sowie mit Hilfe unserer',
        'Reiserechtsexperten, ob Du einen Anspruch auf Erstattung gegen Deinen Reiseveranstalter hast - wegen Reisemängeln, aufgrund von Urlaubsstornierungen, Flugverspätungen oder anderen reiserechtlichen Problemen.',
        'Dafür musst Du uns nur ein paar Details zu Deinem Fall über unseren Fragebogen übermitteln.',
        'Unser Algorithmus ermöglicht es in vielen Fällen, bereits mit Übermittlung Deiner Falldaten zu ermitteln, ob Du einen Anspruch gegen den Reiseveranstalter hast und wenn ja, in welcher Höhe.',
      ],
      icon: List,
    },
    {
      title: 'Erstattung beauftragen',
      text: [
        'Sollte ein Anspruch bestehen, kannst Du uns nun damit beauftragen, Deinen Anspruch beim Reiseveranstalter durchzusetzen. Falls nötig, verhelfen renommierte Reiserechtsanwälte Dir auch vor Gericht zu Deinem Recht. Wir halten Dich zum Stand des Verfahrens stets auf dem Laufenden.',
        'Bei noch offenen Fragen kontaktieren Dich unsere Rechtsexperten auch telefonisch für ein persönliches Gespräch. Solltest Du beim Ausfüllen des Fragebogens bestimmte Reisedokumente oder weitere Unterlagen (z.B. Beweismittel) noch nicht hochgeladen haben, kannst Du dies bequem nachholen durch Übermittlung der Unterlagen an unsere E-Mail-Adresse info@legalai.io.',
      ],
      icon: LawOrder,
    },
    {
      title: 'Geld erhalten',
      text: [
        'Wenn der Reiseveranstalter die Erstattung leistet, überweisen wir den Betrag umgehend auf Dein Konto. Unser Service ist für Dich ohne Risiko, denn LegalAI arbeitet rein erfolgsbasiert. Nur im Erfolgsfall berechnen wir ein Honorar in Höhe von 25% inkl. MwSt. Für unsere Kunden mit Rechtsschutzversicherung ist unser Service kostenlos, wir rechnen direkt mit der Versicherung ab.',
      ],
      icon: DollarInHand,
    },
  ];

  return (
    <div className="py-8">
      <section className="w-full flex flex-col justify-center rounded-3xl  bg-gradient-to-r from-sky-100 to-indigo-200 p-8 lg:h-72 ">
        <h1 className="text-3xl font-bold text-neutral-800">
          So funktioniert&apos;s
        </h1>
        <p className="mt-4 text-sm font-medium text-neutral-600 lg:text-base lg:w-2/3">
          Digitale Forderung Deiner Rechte: Mit verständlichen Fragen
          unterstützt dich LegalAI unkompliziert bei der Forderung Deiner
          Rechte. Gibst du uns grünes Licht, setzen wir Deine Ansprüche für Dich
          durch. Hier erfährst du im Detail, wie LegalAI funktioniert.
        </p>
      </section>

      <section className="mt-8 mx-auto lg:w-1/2 flex flex-col gap-8">
        {workList.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-8 border border-neutral-200 rounded-3xl p-4 lg:flex-row lg:items-start "
          >
            <div className="relative shrink-0">
              {React.createElement(item.icon, {
                className: 'w-24 h-24 fill-neutral-800 z-100',
              })}
              <span
                className={`blob absolute w-24 h-24 top-0 blur-lg opacity-40 ${
                  [
                    'bg-violet-500 bg-gradient-to-r from-violet-500 to-fuchsia-500',
                    'bg-gradient-to-r from-yellow-500 to-pink-500',
                    'bg-gradient-to-r from-cyan-500 to-blue-500',
                  ][idx]
                }`}
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-neutral-800">
                {item.title}
              </h3>
              <ul className="mt-4 text-sm list-disc ml-4 flex flex-col gap-2 text-neutral-500 lg:text-base">
                {item.text.map((text, idx) => (
                  <li key={`${item.title}_${idx}`}>{text}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
