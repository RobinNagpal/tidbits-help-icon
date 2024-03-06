import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface HelpButtonProps {
  showModal: (arg: boolean) => void;
}

export default function HelpButton({ showModal }: HelpButtonProps) {
  return (
    <button
      onClick={() => showModal(true)}
      className="fixed bottom-0 right-0 mb-4 mr-4 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
    >
      <span className="flex items-center justify-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
        <QuestionMarkCircleIcon height={20} width={20} className="mr-2" />
        Help
      </span>
    </button>
  );
}
