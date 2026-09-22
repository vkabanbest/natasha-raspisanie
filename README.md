# Расписание Наташи — Android

Это готовая оболочка Capacitor для существующего HTML-приложения.

## Самый простой путь без Android Studio

1. Создать пустой GitHub-репозиторий.
2. Загрузить в него все файлы этого проекта.
3. Открыть вкладку **Actions**.
4. Запустить workflow **Build Android APK** вручную через **Run workflow**.
5. После завершения открыть запуск workflow и скачать artifact `natasha-schedule-debug-apk`.
6. Внутри будет `app-debug.apk`.

## Что уже есть

- существующий интерфейс расписания;
- светлая/тёмная тема;
- сохранение расписания;
- импорт/экспорт;
- поиск;
- добавление/редактирование/перенос/удаление;
- пасхалка для Наташи;
- Capacitor Preferences для нативного хранения данных.

## Если позже понадобится локальная сборка

```bash
npm install
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```

APK появится здесь:

`android/app/build/outputs/apk/debug/app-debug.apk`

## Важно

Папку `android/` специально не храним в исходной заготовке: GitHub Actions создаёт её командой `npx cap add android`. Это уменьшает размер проекта и исключает ручное редактирование огромного количества Android-файлов.
